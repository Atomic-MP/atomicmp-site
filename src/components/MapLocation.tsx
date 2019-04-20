import * as L from 'leaflet';
import { Icon } from 'leaflet';
import * as React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { mapImagePointToLatLng } from 'src/utils/helpers';

interface IMapLocationProps {
  id: string;
  icon: string;
  x: number;
  y: number;
}

interface IMapLocationState {
  hover: boolean;
}

class MapLocation extends React.Component<IMapLocationProps, Partial<IMapLocationState>> {
  public state = {
    hover: false
  }

  constructor(props: IMapLocationProps) {
    super(props);
    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this)
    this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this)
    this.handleDragStart = this.handleDragStart.bind(this)
  }

  public render() {
    const iconDimension = 40;

    const locationIcon: Icon = new L.Icon({
      // className: 'leaflet-div-icon',
      iconAnchor: undefined,
      iconSize: new L.Point(iconDimension, iconDimension),
// tslint:disable-next-line: object-literal-sort-keys
      iconRetinaUrl: this.props.icon,
      iconUrl: this.props.icon,
      popupAnchor: undefined,
      shadowUrl: undefined,
      shadowSize: undefined,
      shadowAnchor: undefined,
    });

    const location = mapImagePointToLatLng({ x: this.props.x, y: this.props.y})

    return (

      <Marker position={location} icon={locationIcon}>
        <Popup>
          <span>{this.props.id}</span>
        </Popup><title>{this.props.id}</title>
        {/* <image id={this.props.id}
          style={{
            WebkitFilter: "none",
            boxShadow: "1px 1px black",
            opacity: 1,
          }}
          onDragStart={this.handleDragStart}
          stroke="#1aff80"
          strokeWidth="2"
          width={iconDimension + "px"}
          height={iconDimension + "px"}
          x={this.props.x - iconDimension / 2}
          y={this.props.y - iconDimension / 2}
          onMouseEnter={this.handleOnMouseEnter}
          onMouseLeave={this.handleOnMouseLeave}
          xlinkHref={this.props.icon}
        /> */}
      </Marker>
    )
  }
  public handleOnMouseEnter() {
    this.setState({ hover: true })
  }
  public handleOnMouseLeave() {
    this.setState({ hover: false })
  }
  public handleDragStart(event: any) {
    event.preventDefault();
  }
}

export default MapLocation;
