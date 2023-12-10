async function get_events_sessions()
{
    var movie_data = await fetch("https://www.eventcinemas.com.au/Cinemas/GetSessions?cinemaIds=21&cinemaIds=85&cinemaIds=9&cinemas=96");
    console.log(movie_data);
}