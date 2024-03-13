import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function MediaCard({ title, imgUrl, description, urlLink }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };

    return (
        <Card sx={{ maxWidth: 400, margin: "15px", borderRadius: "10px", boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.25)" }}>
            <CardHeader
                style={{ textAlign: "center", color: "rgba(66, 117, 250, 1)" }}
                title={title}
            //subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                style={{ width: "90%", borderRadius: "10px", margin: "20px" }}
                image={imgUrl}
                alt="Paella dish"
            // borderRadius="50px"
            />
            <CardContent>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <NewspaperIcon style={{ color: "rgba(229, 85, 78, 1)" }} onClick={() => openInNewTab(urlLink)} />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph width="100%">
                        {description}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}