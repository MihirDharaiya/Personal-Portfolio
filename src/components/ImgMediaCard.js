import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
                {/* <Typography gutterBottom variant="h6" component="div" fontWeight="700" color="#4275FA">
                    {title}
                </Typography> */}
                <h5 style={{ textAlign: 'center' }}>{title}</h5>
                <div style={{ margin: "5%" }}>
                    {/* <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography> */}
                    <p>{description}</p>
                </div>
            </CardContent>
            <CardActions>
                {/* <Button size='large'>Link</Button> */}
            </CardActions>
        </Card>
    );
}
