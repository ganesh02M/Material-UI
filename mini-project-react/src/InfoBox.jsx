import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';


export default function InfoBox({info}){
    const INIT_URL ="https://images.unsplash.com/photo-1641970304222-b2b332808a4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww"
      
    const HOT_URL ="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SE9UJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
     const COLD_URL ="https://images.unsplash.com/photo-1616951849649-74dd2dd7e662?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
      const RAIN_URL ="https://media.istockphoto.com/id/1419733957/photo/dark-sky-and-heavy-rain-thunder-storm-over-a-city.webp?a=1&b=1&s=612x612&w=0&k=20&c=82JEGYWgYZK2fgMnktg9UEhhzF8FYF4Eu0FXaIF2wIw=";
    
   return(
    <div className="InfoBox">
        <div className='cardContainer'>

        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={info.humidity > 80 ? RAIN_URL : info.temp >15 ? HOT_URL:COLD_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
            info.humidity > 80 
            ? <ThunderstormIcon />
            : info.temp >15
            ? <SunnyIcon/>
            :<AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" 
        
  sx={{
    maxWidth: 345,
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 15px 40px rgba(0,0,0,0.35)",
    },
    }}
        component={"span"}>
         <p><b>🌡 Temperature:</b> {info.temp}&deg;C</p>
         <p><b>💧 Humidity:</b> {info.humidity}%</p>
         <p><b>📉 Min Temp:</b> {info.tempMin}&deg;C</p>
         <p><b>📈 Max Temp:</b> {info.tempMax}&deg;C</p>
        <p>
        <b>🌤 Condition:</b> {info.weather}, feels like {info.feelsLike}&deg;C
        </p>
             
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>
   )
}