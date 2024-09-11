import { Box, Card, Grid2, CardMedia, CardContent, Typography } from "@mui/material";

const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
const IMAGE_SIZE = 'original';

function MovieCard({ movie }) {
    return (
        <Grid2 item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <Card style={{ backgroundColor: '#2C2C34', color: '#fff' }}>
                <Box position="relative">
                    <CardMedia
                        component="img"
                        image={`${TMDB_IMAGE_BASE_URL}${IMAGE_SIZE}${movie.backdrop_path}`} // Replace with actual image url
                        alt={movie.title}
                        style={{ width: 230, height: 300, objectFit: 'cover' }}
                    />
                </Box>
                <CardContent>
                    <Typography 
                        variant="h7" 
                        style={{ 
                            wordWrap: 'break-word',
                            wordBreak: 'break-word', 
                            maxWidth: '200px', 
                            textAlign: 'center',
                            display: "inline-block", whiteSpace: "pre-line"
                        }}>
                            {movie.title}
                    </Typography>
                    <Typography variant="body2" color="gray">
                        Año: {movie.release_date}
                    </Typography>
                </CardContent>
            </Card>
        </Grid2>
    );
}

export default MovieCard;