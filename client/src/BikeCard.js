import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

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

function BikeCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     S
        //   </Avatar>
        // }
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title="Specialized Stumpjumper"
        subheader="Price: $2000"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/P1080421_resize.JPG/220px-P1080421_resize.JPG"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Combining the lightweight efficient DNA of the Epic EVO with the benchmark handling and capability of the new Stumpjumper EVO,
         the new Stumpjumper is the ultimate singletrack flow finder.
          It climbs and accelerates like it has a motor, descends with authority,
           and flat out tears through every conceivable trail condition. There’s never been an all-round trail bike this light, 
           this efficient, this capable.
        </Typography>
        <Button onClick={handleExpandClick}> Expand</Button>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          {/* <FavoriteIcon /> */}
        </IconButton>
        <IconButton aria-label="share">
          {/* <ShareIcon /> */}
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {/* <ExpandMoreIcon /> */}
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Paragraph Header:</Typography>
          <Typography paragraph>
            This is an area for expanded stuff
          </Typography>
          <Typography paragraph>
            A paragraph area for more info
          </Typography>
          <Typography paragraph>
            Another paragraph
          </Typography>
          <Typography>
            Maybe click here to buy of something if I keep the expanded
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default BikeCard;
