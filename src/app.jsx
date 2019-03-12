import React, { Component } from 'react';
import { App, Row, Col, Statusbar, Panel, BlockTitle, Card, CardHeader, CardFooter, CardContent, Block, Segmented, Button, List, ListItem, View, Page, Navbar, Toolbar, Link } from 'framework7-react';

export default () => (
  // Main Framework7 App component where we pass Framework7 params
  <App params={{ theme: 'auto', name: 'My App', id: 'com.demoapp.test' }}>

  <Statusbar />

  <Panel left cover themeDark>
    <Navbar title="Left Panel" />
    <Block>Left panel content</Block>
  </Panel>

  <Panel right reveal>
    <Navbar title="Right Panel" />
    <Block>Right panel content</Block>
  </Panel>

  <View main>
    <Page>
      <Navbar title="My App" />

      <BlockTitle>Simple Cards</BlockTitle>
<Card
  content="This is a simple card with plain text, but cards can also contain their own header, footer, list view, image, or any other element."
></Card>
<Card
  title="Card header"
  content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
  footer="Card footer"
></Card>
<Card
  content="Another card. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat sem est, non tincidunt ligula volutpat sit amet. Mauris aliquet magna justo. "
></Card>

<BlockTitle>Outline Cards</BlockTitle>
<Card
  outline
  content="This is a simple card with plain text, but cards can also contain their own header, footer, list view, image, or any other element."
></Card>
<Card
  outline
  title="Card header"
  content="Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions."
  footer="Card footer"
></Card>
<Card
  outline
  content="Another card. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat sem est, non tincidunt ligula volutpat sit amet. Mauris aliquet magna justo. "
></Card>

<BlockTitle>Expandable Cards</BlockTitle>
<Card expandable>
  <CardContent padding={false}>
    <div className="bg-color-red" style={{height: '300px'}}>
      <CardHeader textColor="white" className="display-block">
        Framework7
        <br />
        <small style={{opacity: 0.7}}>Build Mobile Apps</small>
      </CardHeader>
      <Link cardClose color="white" className="card-opened-fade-in" style={{position: 'absolute', right: '15px', top: '15px'}} iconF7="close_round_fill" />
    </div>
    <div className="card-content-padding">
      <p>Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps or web apps with iOS or Android (Material) native look and feel...</p>
    </div>
  </CardContent>
</Card>

<Card expandable>
  <CardContent padding={false}>
    <div className="bg-color-yellow" style={{height: '300px'}}>
      <CardHeader textColor="black" className="display-block">
        Framework7
        <br/>
        <small style={{opacity: 0.7}}>Build Mobile Apps</small>
      </CardHeader>
      <Link cardClose color="black" className="card-opened-fade-in" style={{position: 'absolute', right: '15px', top: '15px'}} iconF7="close_round_fill" />
    </div>
    <div className="card-content-padding">
      <p>Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps or web apps with iOS or Android (Material) native look and feel...</p>
    </div>
  </CardContent>
</Card>

      <Block>
        <Row>
          <Col>
            <Button fill>Button</Button>
          </Col>
          <Col>
            <Button fill>Button</Button>
          </Col>
          <Col>
            <Button fill round>Round</Button>
          </Col>
        </Row>
      </Block>

      <Block>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend, elit vitae scelerisque vulputate, tortor velit tempus dui, et luctus tellus justo nec velit. Duis scelerisque in tellus et pretium. Ut faucibus fringilla risus, ut dapibus nunc vehicula sit amet. Donec posuere nunc non fermentum commodo.</p>
      </Block>
      <Block>
        <Segmented>
          <Button panelOpen="left">Left Panel</Button>
          <Button panelOpen="right">Right Panel</Button>
        </Segmented>
      </Block>
      <List>
        {
          [1, 2, 3, 4].map(n => (
            <ListItem
              key={n}
              title={`Item ${n}`}
            />
          ))
        }
      </List>
    </Page>
  </View>

  </App>
)