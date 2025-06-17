import { MAP_TYPE } from './constants';

/**
 * Map Control Types
 */
export interface MapControlProps {
  currentMapType: string;
  onToggleMapType: (newMapType: string) => void;
}

/**
 * Map Type Toggle Control
 * Toggles between roadmap and satellite view
 */
export const MapTypeToggle: React.FC<MapControlProps> = ({ 
  currentMapType, 
  onToggleMapType 
}) => {
  return (
    <div className="gm-inset-map-container">
      <div>
        <button 
          className={`gm-inset-map ${currentMapType === MAP_TYPE.SATELLITE ? 'gm-inset-dark' : 'gm-inset-light'}`}
          onClick={() => onToggleMapType(currentMapType === MAP_TYPE.ROADMAP ? MAP_TYPE.SATELLITE : MAP_TYPE.ROADMAP)}
          aria-label={currentMapType === MAP_TYPE.ROADMAP ? "Tunjukkan citra satelit" : "Tunjukkan peta jalan"}
          title={currentMapType === MAP_TYPE.ROADMAP ? "Tunjukkan citra satelit" : "Tunjukkan peta jalan"}
        >
          <div className="map-toggle-overlay"></div>
          <div className="gm-inset-map-impl" aria-hidden="true">
            {currentMapType === MAP_TYPE.ROADMAP ? (
              <div className="satellite-thumbnail"></div>
            ) : (
              <div className="map-thumbnail"></div>
            )}
          </div>
        </button>
      </div>
    </div>
  );
};
