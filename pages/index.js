import NextLink from 'next/link'
import Layout from '../components/Layout'
import { Button, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import data from '../utils/data'
import { Card } from '@material-ui/core'

export default function Home() {
  return (
    <Layout>
      <div>
        <h1> Products </h1>
        <Grid container spacing ={3}>
          {data.products.map((product) => (
            <Grid item md={4} key={product.name}>
              <Card>
                <NextLink href={`/products/${product.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      style={{
                        height: "350px",
                        marginLeft: "13px",
                        marginTop: "20px",
                        width: "100%"
                      }}
                      image={product.image}
                      title={product.name}
                    ></CardMedia>
                    <CardContent>
                      <Typography> {product.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
                <CardActions>
                  <Typography> ${product.price}</Typography>
                  <Button size="small" color="primary">Add to cart</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  )
}
