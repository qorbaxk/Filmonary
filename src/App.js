
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Movies from './pages/Movies';
import Navigation from './components/Navigation';

//1.페이지는 총 3개 필요 (홈페이지, 모음페이지, 상세페이지)
//2.홈페이지에서는 배너를 볼 수 있다
//3.영화 인기작, 평점높은작품, 상영예정작 3가지 섹션
//4.각 영화에 마우스를 올리면 제목, 장르, 평점, 인기도, 청불여부를 알수있다
//5.슬라이드로 넘겨서 영화를 더 볼 수 있다

//6.영화 디테일페이지에서 영화에대한 디테일한 정보를 볼 수 있다 (포스터, 제목, 줄거리, 점수, 인기도, 청불여부, 등등)
//7.트레일러를 볼수 있다 (예고편으로 연결)
//8.영화리뷰도 볼수 있다
//9.추천(관련된 영화)도 볼 수 있다

//10.검색이 가능하다
//11.정렬할 수 있다
//12.필터링할 수 있다(년도,평점,장르별로)


function App() {
  return (
    <div className='main' >
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movies/:id' element={<MovieDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
