/**
 * Simple e2e smoke test for Docker image
 * Requires Docker daemon available on CI/host
 */
const { execSync, spawnSync } = require('node:child_process')
const path = require('node:path')
const assert = require('node:assert')

const projectRoot = path.resolve(__dirname, '..')

function sh(cmd, opts = {}) {
  return execSync(cmd, { stdio: 'pipe', encoding: 'utf8', ...opts })
}

describe('Docker image', () => {
  const image = 'sabidzpro/portfolio:test'
  const containerName = 'portfolio-test'

  let dockerAvailable = true

  beforeAll(() => {
    try {
      sh('docker --version')
    } catch {
      dockerAvailable = false
      //console.warn('Docker not available; skipping docker e2e tests')
    }
    if (!dockerAvailable) return
    // Build image
    sh(`docker build -t ${image} ${projectRoot}`)
  }, 15 * 60 * 1000) // up to 15min for cold build

  afterAll(() => {
    try { sh(`docker rm -f ${containerName}`) } catch {}
    try { sh(`docker rmi -f ${image}`) } catch {}
  })

  test('container starts and responds on /', () => {
    if (!dockerAvailable) {
      //console.warn('Skipping: docker not available')
      return
    }
    // Run container
    sh(`docker run -d --name ${containerName} -p 3001:3000 -e NEXT_PUBLIC_SITE_URL=http://localhost:3001 ${image}`)

    // Wait a bit for server to boot
    const maxWaitMs = 60_000
    const start = Date.now()
    let ok = false

    while (Date.now() - start < maxWaitMs) {
      const res = spawnSync(process.platform === 'win32' ? 'powershell' : 'curl',
        process.platform === 'win32'
          ? ['-NoProfile', '-Command', `try { (Invoke-WebRequest http://localhost:3001 -UseBasicParsing).StatusCode } catch { 0 }`]
          : ['-s', '-o', '/dev/null', '-w', '%{http_code}', 'http://localhost:3001']
      )
      const code = res.stdout.toString().trim()
      if (code === '200' || code === '308' || code === '304') { ok = true; break }
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 1000)
    }

    assert.ok(ok, 'Server did not become ready in time')
  }, 180_000)
})
