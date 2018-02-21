import React from 'react';

import NewsSlider from '../widgets/NewsSlider/slider';
import NewsList from '../widgets/NewsList/newsList';

const Home = () => {
  return(
    <div>
        <NewsSlider
          type="featured"
          start={0}
          amount={18}
          settings={{
            dots: false
          }}
          />
        <NewsList/>
    </div>
  )
}

export default Home;
