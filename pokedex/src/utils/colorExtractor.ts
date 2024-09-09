export const getDominantColors = (imageUrl: string): Promise<string[]> => {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.crossOrigin = 'Anonymous';
		img.src = imageUrl;

		img.onload = () => {
			const canvas = document.createElement('canvas');
			const context = canvas.getContext('2d');

			if (!context) {
				return reject(new Error('Could not create canvas context'));
			}

			canvas.width = img.width;
			canvas.height = img.height;
			context.drawImage(img, 0, 0, img.width, img.height);

			const imageData = context.getImageData(0, 0, img.width, img.height);
			const data = imageData.data;

			const colorCounts: { [color: string]: number } = {};
			for (let i = 0; i < data.length; i += 4) {
				const r = data[i];
				const g = data[i + 1];
				const b = data[i + 2];
				const color = `${r},${g},${b}`;
				if (colorCounts[color]) {
					colorCounts[color]++;
				} else {
					colorCounts[color] = 1;
				}
			}

			const sortedColors = Object.entries(colorCounts).sort((a, b) => b[1] - a[1]);
			const dominantColors = sortedColors.slice(0, 2).map((color) => `rgba(${color[0]}, 0.8)`);

			resolve(dominantColors);
		};

		img.onerror = (err) => {
			reject(err);
		};
	});
};
