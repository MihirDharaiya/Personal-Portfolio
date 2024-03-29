import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import NewspaperIcon from '@mui/icons-material/Newspaper';

export default function ImgMediaCard({ title, imgUrl, description }) {
    return (
        <Card sx={{ maxWidth: 600, marginLeft: "15px", borderRadius: "10px" }}>
            <CardMedia
                component="img"
                height="100"
                image={imgUrl}
                borderRadius="10px"
            />
            <CardContent>
                <h5 style={{ textAlign: 'center' }}>{title}</h5>
                <div style={{ margin: "5%" }}>
                    <p>{description}</p>
                </div>
            </CardContent>
            <CardActions>
                <NewspaperIcon /* onClick={Whatever} */ />
            </CardActions>
        </Card>
    );
}