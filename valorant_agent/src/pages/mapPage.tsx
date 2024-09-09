import React from 'react';
import { useSelector } from 'react-redux';
import { useMaps } from '../queries/maps';

const MapPage: React.FC = () => {
	const maps = useSelector((state: any) => state.maps?.maps || []);
	const { isLoading: mapsLoading } = useMaps();

	return (
		<div>
			<h1>Maps</h1>
			{mapsLoading ? (
				<p>Loading...</p>
			) : (
				<ul>
					{maps.length > 0 ? (
						maps.map((map: any) => (
							<li key={map.uuid} style={{ marginBottom: '20px' }}>
								<img src={map.displayIcon} alt={map.displayName} width='50' height='50' />
								<h2>{map.displayName}</h2>
								<p>
									<strong>UUID:</strong> {map.uuid}
								</p>
								<p>
									<strong>Narrative Description:</strong> {map.narrativeDescription || 'None'}
								</p>
								<p>
									<strong>Tactical Description:</strong> {map.tacticalDescription}
								</p>
								<p>
									<strong>Coordinates:</strong> {map.coordinates}
								</p>
								<div>
									<img src={map.listViewIcon} alt={`${map.displayName} List View Icon`} width='50' />
									<img src={map.listViewIconTall} alt={`${map.displayName} List View Icon Tall`} width='50' />
									<img src={map.splash} alt={`${map.displayName} Splash`} width='200' />
									<img src={map.stylizedBackgroundImage} alt={`${map.displayName} Stylized Background`} width='200' />
									<img src={map.premierBackgroundImage} alt={`${map.displayName} Premier Background`} width='200' />
								</div>
								<p>
									<strong>Asset Path:</strong> {map.assetPath}
								</p>
								<p>
									<strong>Map URL:</strong> {map.mapUrl}
								</p>
								<p>
									<strong>X Multiplier:</strong> {map.xMultiplier}
								</p>
								<p>
									<strong>Y Multiplier:</strong> {map.yMultiplier}
								</p>
								<p>
									<strong>X Scalar To Add:</strong> {map.xScalarToAdd}
								</p>
								<p>
									<strong>Y Scalar To Add:</strong> {map.yScalarToAdd}
								</p>
								<h3>Callouts</h3>
								<ul>
									{map.callouts && map.callouts.length > 0 ? (
										map.callouts.map((callout: any, index: number) => (
											<li key={index} style={{ marginBottom: '10px' }}>
												<p>
													<strong>Region Name:</strong> {callout.regionName}
												</p>
												<p>
													<strong>Super Region Name:</strong> {callout.superRegionName}
												</p>
												<p>
													<strong>Location:</strong> x: {callout.location.x}, y: {callout.location.y}
												</p>
											</li>
										))
									) : (
										<p>No callouts available</p>
									)}
								</ul>
							</li>
						))
					) : (
						<p>No maps available</p>
					)}
				</ul>
			)}
		</div>
	);
};

export default MapPage;
