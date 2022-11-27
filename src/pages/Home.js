import Card from 'react-bootstrap/Card';

function Home() {
  return (
    <header>
      <h1>cress.cc</h1>
      <p>くれすの個人サイトです。</p>
      <Card>
        <Card.Body>
          <Card.Title>更新履歴</Card.Title>
          <Card.Text>
            <dl>
              <dt>2022-11-28</dt>
              <dd><a href="https://blog.cress.cc/">くれすのFPノート</a>追加</dd>
            </dl>
          </Card.Text>
        </Card.Body>
      </Card>
    </header>
  );
}

export default Home;
