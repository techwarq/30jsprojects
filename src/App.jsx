
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Correct import for routing
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import VideoDetails from './components/VideoDetails';
import ChannelDetails from './components/ChannelDetails';
import SearchFeed from './components/SearchFeed';
import Feed from './components/Feed';

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/search/:id" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
