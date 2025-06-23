import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function InstagramGrid() {
  return (
    <Box
      sx={{
        width: '100%',
        px: { xs: 2, sm: 4, md: 8 },
        py: 6,
        boxSizing: 'border-box',
        overflowX: 'hidden',
      }}
    >
      <ImageList
        variant="quilted"
        cols={12}
        rowHeight={140}
        gap={8}
        sx={{
          width: '100%',
          margin: '0 auto',
        }}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols ? item.cols * 3 : 3}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 140, item.rows, item.cols ? item.cols * 3 : 3)}
              alt={item.title}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '12px',
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&h=600&fit=crop',
    title: 'Coffee Mug',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://cdn.pixabay.com/photo/2017/09/04/18/39/coffee-2714970_1280.jpg',
    title: 'Chocolate Bar',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2024/10/20/14/51/coffee-9135194_1280.jpg',
    title: 'Chocolate Chunks',
  },
  {
    img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop',
    title: 'Roasted Beans',
    cols: 2,
  },
  {
    img: 'https://cdn.pixabay.com/photo/2017/05/30/12/20/matcha-2356768_1280.jpg',
    title: 'Cocoa Powder',
    cols: 2,
  },
  {
    img: 'https://cdn.pixabay.com/photo/2014/02/10/11/25/coffee-powder-263354_1280.jpg',
    title: 'Cold Brew',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&h=600&fit=crop',
    title: 'Truffles',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2016/11/29/13/54/breakfast-1870009_1280.jpg',
    title: 'Pouring Coffee',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2023/11/14/17/58/coffee-8388244_1280.jpg',
    title: 'Chocolate Dessert',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/chocolate-2554_1280.jpg',
    title: 'Coffee Setup',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2016/03/24/15/53/chocolate-1277002_1280.jpg',
    title: 'Chocolate Drink',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2016/10/13/11/44/chocolates-1737503_1280.jpg',
    title: 'Beans and Mug',
    cols: 2,
  },
];


  