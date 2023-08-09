import React from 'react'
import Sidebar from '../Sidebar'

const TableComponent = () => {
  return (
    <div>
      <div className="container bg-body-secondary mt-3">
        <h2 className='text-center py-3'>Form</h2>
        <Row>
          {this.state.arr.map((x, i) => {
            return (
              <Col xs={4} key={i}>
                <Card>
                  <CardBody>
                    <CardTitle tag="h5">
                      {x.category}
                    </CardTitle>
                    <CardSubtitle
                      className="mb-2 text-muted"
                      tag="h6"
                    >
                      {x.productName}
                      {x.price}
                      {x.clothSize}
                      {x.inStock}
                    </CardSubtitle>
                    <CardText>
                      Some quick example text to build on the card title and make up the bulk of the card‘s content.
                    </CardText>
                    <Button>
                      Button
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            )
          })}
        </Row>
      </div>
    </div>
  )
}

export default Sidebar(TableComponent)