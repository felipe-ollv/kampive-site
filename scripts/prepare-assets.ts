import sharp from 'sharp';

await Promise.all([
  sharp('design/landscape-source.png').resize(1440).webp({ quality: 83 }).toFile('public/images/landscape.webp'),
  sharp('design/landscape-source.png').resize(640).webp({ quality: 82 }).toFile('public/images/landscape-small.webp'),
  sharp('design/landscape-source.png').resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 85, mozjpeg: true }).toFile('public/images/social.jpg'),
  sharp('design/app-icon.png').extract({ left: 78, top: 77, width: 1100, height: 1100 }).resize(104).webp({ quality: 90 }).toFile('public/images/brand.webp'),
  sharp('design/app-icon.png').extract({ left: 78, top: 77, width: 1100, height: 1100 }).resize(180).png().toFile('public/images/apple-touch-icon.png'),
  sharp('design/app-icon.png').extract({ left: 78, top: 77, width: 1100, height: 1100 }).resize(32).png().toFile('public/images/favicon.png'),
]);
console.info('Optimized responsive images, social preview and icons generated.');
