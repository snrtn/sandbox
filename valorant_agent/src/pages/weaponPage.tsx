/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { useSelector } from 'react-redux';
import { useWeapons } from '../queries/weapons';

const WeaponPage: React.FC = () => {
	const weapons = useSelector((state: any) => state.weapons?.weapons || []);
	const { isLoading: weaponsLoading } = useWeapons();

	return (
		<div>
			<h1>Weapons</h1>
			{weaponsLoading ? (
				<p>Loading...</p>
			) : (
				<ul>
					{weapons.map((weapon: any) => (
						<li key={weapon.uuid} style={{ marginBottom: '20px' }}>
							<img src={weapon.displayIcon} alt={weapon.displayName} width='50' height='100%' />
							<h2>{weapon.displayName}</h2>
							<p>
								<strong>Category:</strong> {weapon.category}
							</p>
							<p>
								<strong>Default Skin UUID:</strong> {weapon.defaultSkinUuid}
							</p>
							<img src={weapon.killStreamIcon} alt={`${weapon.displayName} Kill Stream Icon`} width='50' />
							<p>
								<strong>Asset Path:</strong> {weapon.assetPath}
							</p>

							<h3>Weapon Stats</h3>
							{weapon.weaponStats && (
								<div>
									<p>
										<strong>Fire Rate:</strong> {weapon.weaponStats.fireRate}
									</p>
									<p>
										<strong>Magazine Size:</strong> {weapon.weaponStats.magazineSize}
									</p>
									<p>
										<strong>Run Speed Multiplier:</strong> {weapon.weaponStats.runSpeedMultiplier}
									</p>
									<p>
										<strong>Equip Time (seconds):</strong> {weapon.weaponStats.equipTimeSeconds}
									</p>
									<p>
										<strong>Reload Time (seconds):</strong> {weapon.weaponStats.reloadTimeSeconds}
									</p>
									<p>
										<strong>First Bullet Accuracy:</strong> {weapon.weaponStats.firstBulletAccuracy}
									</p>
									<p>
										<strong>Shotgun Pellet Count:</strong> {weapon.weaponStats.shotgunPelletCount}
									</p>
									<p>
										<strong>Wall Penetration:</strong> {weapon.weaponStats.wallPenetration}
									</p>
									<p>
										<strong>Feature:</strong> {weapon.weaponStats.feature}
									</p>
									<p>
										<strong>Fire Mode:</strong> {weapon.weaponStats.fireMode}
									</p>
									<p>
										<strong>Alt Fire Type:</strong> {weapon.weaponStats.altFireType}
									</p>
									{weapon.weaponStats.adsStats && (
										<div>
											<h4>ADS Stats</h4>
											<p>
												<strong>Zoom Multiplier:</strong> {weapon.weaponStats.adsStats.zoomMultiplier}
											</p>
											<p>
												<strong>Fire Rate:</strong> {weapon.weaponStats.adsStats.fireRate}
											</p>
											<p>
												<strong>Run Speed Multiplier:</strong> {weapon.weaponStats.adsStats.runSpeedMultiplier}
											</p>
											<p>
												<strong>Burst Count:</strong> {weapon.weaponStats.adsStats.burstCount}
											</p>
											<p>
												<strong>First Bullet Accuracy:</strong> {weapon.weaponStats.adsStats.firstBulletAccuracy}
											</p>
										</div>
									)}
									<h4>Damage Ranges</h4>
									{weapon.weaponStats.damageRanges.map((range: any, index: number) => (
										<div key={index}>
											<p>
												<strong>Range Start (meters):</strong> {range.rangeStartMeters}
											</p>
											<p>
												<strong>Range End (meters):</strong> {range.rangeEndMeters}
											</p>
											<p>
												<strong>Head Damage:</strong> {range.headDamage}
											</p>
											<p>
												<strong>Body Damage:</strong> {range.bodyDamage}
											</p>
											<p>
												<strong>Leg Damage:</strong> {range.legDamage}
											</p>
										</div>
									))}
								</div>
							)}

							<h3>Shop Data</h3>
							{weapon.shopData && (
								<div>
									<p>
										<strong>Cost:</strong> {weapon.shopData.cost}
									</p>
									<p>
										<strong>Category:</strong> {weapon.shopData.category}
									</p>
									<p>
										<strong>Shop Order Priority:</strong> {weapon.shopData.shopOrderPriority}
									</p>
									<p>
										<strong>Category Text:</strong> {weapon.shopData.categoryText}
									</p>
									<p>
										<strong>Grid Position:</strong>
										{weapon.shopData.gridPosition ? (
											<span>
												Row {weapon.shopData.gridPosition.row}, Column {weapon.shopData.gridPosition.column}
											</span>
										) : (
											<span>Not Available</span>
										)}
									</p>
									<p>
										<strong>Can Be Trashed:</strong> {weapon.shopData.canBeTrashed ? 'Yes' : 'No'}
									</p>
									{weapon.shopData.image && (
										<img src={weapon.shopData.image} alt={`${weapon.displayName} Shop Image`} width='50' />
									)}
									{weapon.shopData.newImage && (
										<img src={weapon.shopData.newImage} alt={`${weapon.displayName} New Shop Image`} width='50' />
									)}
								</div>
							)}

							<h3>Skins</h3>
							{weapon.skins && weapon.skins.length > 0 ? (
								weapon.skins.map((skin: any) => (
									<div key={skin.uuid} style={{ marginBottom: '10px' }}>
										<p>
											<strong>Skin Name:</strong> {skin.displayName}
										</p>
										<img src={skin.displayIcon} alt={skin.displayName} width='50' />
										{skin.chromas && (
											<div>
												<h4>Chromas</h4>
												{skin.chromas.map((chroma: any) => (
													<div key={chroma.uuid} style={{ marginBottom: '10px' }}>
														<p>
															<strong>Chroma Name:</strong> {chroma.displayName}
														</p>
														{chroma.displayIcon && <img src={chroma.displayIcon} alt={chroma.displayName} width='50' />}
														<img src={chroma.fullRender} alt={`${chroma.displayName} Full Render`} width='100' />
													</div>
												))}
											</div>
										)}
										{skin.levels && (
											<div>
												<h4>Levels</h4>
												{skin.levels.map((level: any) => (
													<div key={level.uuid} style={{ marginBottom: '10px' }}>
														<p>
															<strong>Level Name:</strong> {level.displayName}
														</p>
														{level.displayIcon && <img src={level.displayIcon} alt={level.displayName} width='50' />}
														{level.streamedVideo && (
															<video controls width='200'>
																<source src={level.streamedVideo} type='video/mp4' />
															</video>
														)}
													</div>
												))}
											</div>
										)}
									</div>
								))
							) : (
								<p>No skins available</p>
							)}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default WeaponPage;
