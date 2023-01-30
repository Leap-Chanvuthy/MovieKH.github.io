const API_KEY = 'api_key=fedd5527920fc1c4a80b28c5f70fbc58';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const API_URL1 = BASE_URL + '/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&' + API_KEY;
const API_URL2 = BASE_URL + '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&' + API_KEY;
const API_URL3 = BASE_URL + '/discover/movie?with_genres=18&primary_release_year=2014&' + API_KEY;
const API_URL4 = BASE_URL + '/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc&' + API_KEY;
const API_URL5 = BASE_URL + '/discover/movie?certification_country=US&certification=R&sort_by=revenue.desc&with_cast=3896&' + API_KEY;
const searchUrl = BASE_URL + '/search/movie?' + API_KEY;
const IMG_URl = 'https://image.tmdb.org/t/p/w500';



function getMovie(url,listId,showMovie,moviePageUrl){
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showMovie(data.results,listId,moviePageUrl,url);
        // showMovieToSearchList(data.results,listId);
    });
}

function showMovie(data,listId,moviePageUrl,url){
    listId+=1;
    var movieListTag = document.querySelectorAll(`.movie-group-list-parent-${listId} .swiper-movie-list`);
    console.log(movieListTag);
    for(var i=0 ; i<movieListTag.length ; i++){
        const {title,backdrop_path,vote_average} = data[i];
        movieListTag[i].innerHTML = `<div onclick="watchMovie('${moviePageUrl}','?apiUrl=${urlConvert(url)}&movieId=${i}');" class="movie-list-quick-box">
                        <div class="picture-movie" style="background-image: url('${IMG_URl+backdrop_path}');">
                            <div class="vote-rate">
                            ${averageOfVote(vote_average)}    
                            </div>
                        </div>
                        <p id="movie-list-quick-box-title">${title}</p>
                    </div>`;
    }
}


function showMovieToExploreList(data,listId,moviePageUrl,url){
    var i = 0;
    data.forEach(movie => {
        const {title,backdrop_path,vote_average} = movie;
        htmlTag += `<div onclick="watchMovie('${moviePageUrl}','?apiUrl=${urlConvert(url)}&movieId=${i}');" class="movie-qiuck-box">
                        <div class="movie-image" style="background-image: url('${IMG_URl+backdrop_path}');">
                            <div class="vote-rate">
                                ${averageOfVote(vote_average)}    
                            </div>
                        </div>
                        <div class="movie-title">
                            <p>${title}</p>
                        </div>
                    </div>`;
        i++;
    });
    myMovie.innerHTML = htmlTag;
}

function showMovieToSearchList(data,listId,moviePageUrl,url){
    var movieList = '';
    var moovieListData = document.querySelector(".movie-list");
    for(var i=0;i<16;i+=2){
        const {title,backdrop_path} = data[i];
        movieList += `<div onclick="watchMovie('${moviePageUrl}','?apiUrl=${urlConvert(url)}&movieId=${i}');" class="movie-qiuck-box">
                        <div class="movie-poster" style="background-image: url('${IMG_URl+backdrop_path}');"></div>
                        <h4>${title}</h4>
                    </div>`;
    }
    moovieListData.innerHTML = movieList;
}


function showMovieAfterSearch(data,listId,moviePageUrl,url){
    var i = 0;
    var movieList = '';
    var moovieListData = document.querySelector(".movie-list");
    data.forEach(movie => {
        const {title,poster_path} = movie;
        movieList += `<div onclick="watchMovie('${moviePageUrl}','?apiUrl=${urlConvert(url)}&movieId=${i}');" class="movie-qiuck-box">
                        <div class="movie-poster" style="background-image: url('${IMG_URl+poster_path}');"></div>
                        <h4>${title}</h4>
                    </div>`;
        i++;
    })
    moovieListData.innerHTML = movieList;
}
const searchValue = document.getElementById('search-box');
searchValue.value = "";

function searchActivity(urlMovieVideo){
        searchValue.addEventListener('keyup',(e)=>{
            e.preventDefault();
            const searchTerm = searchValue.value;
            if(searchTerm){
                getMovie(searchUrl+'&query='+searchTerm,0,showMovieAfterSearch,urlMovieVideo);
            }else{
                getMovie(API_URL,0,showMovieToSearchList,"./component/movie.html");
                getMovie(API_URL2,2,showMovieToSearchList,"./component/movie.html");
                getMovie(API_URL1,1,showMovieToSearchList,"./component/movie.html");
                getMovie(API_URL3,3,showMovieToSearchList,"./component/movie.html");
                getMovie(API_URL4,4,showMovieToSearchList,"./component/movie.html");
                getMovie(API_URL5,5,showMovieToSearchList,"./component/movie.html");
            }
        });
}
        


async function watchMovie(moviePageUrl,parm){
    window.location.href = moviePageUrl+parm+'';
}

function urlConvert(url){
    var urlLink = url.split("&");
    var urlString = urlLink.join("|");
    return urlString;
}

function averageOfVote(vote){
    if(vote<=1){
        return '<i class="fa-solid fa-star-half-stroke"></i>'
    }else if(vote<=2){
        return '<i class="fa-solid fa-star"></i>';
    }else if(vote<=3){
        return '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>';
    }else if(vote<=4){
        return '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>';
    }else if(vote<=5){
        return '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>';
    }else if(vote<=6){
        return '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>';
    }else if(vote<=7){
        return '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>';
    }else if(vote<=8){
        return '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>';
    }else if(vote<=9){
        return '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>';
    }else if(vote<=10){
        return '<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>';
    }
}