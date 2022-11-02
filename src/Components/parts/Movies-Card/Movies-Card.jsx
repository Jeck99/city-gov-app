import "./User-Card.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function MoviesCard({ movieItem }) {
  return (
    <div className="user-card">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {movieItem.movieName}
          </Typography>
          <Typography variant="h5" component="div">
            {movieItem.synopsis}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {movieItem.date}
          </Typography>
          <Typography variant="body2">{movieItem.linkToMovie}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            {movieItem.rating}{" "}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default MoviesCard;
// date: "2021-11-13T21:33:01.287Z"
// image: "https://c4.wallpaperflare.com/wallpaper/593/417/84/edge-of-tomorrow-emily-blunt-movies-tom-cruise-wallpaper-preview.jpg"
// linkToMovie: "https://www.imdb.com/title/tt1631867/?ref_=tt_sims_tt_i_2"
// movieName: "Edge of Tomorrow"
// rating: 7.9
// synopsis: "A soldier fighting aliens gets to relive the same day over and over again, the day restarting every time he dies."
// __v: 0
// _id: "61902f0d14b8390016b66508"
