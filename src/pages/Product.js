import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

function Product() {

  const links = [
    {
      title: 'Simple WebSocket Chat (Render)',
      url: "https://simple-websocket-chat.onrender.com/",
      text: 'WebSocketを利用したシンプルなテキストチャット。'
    },
    {
      title: 'Node.jsからCelery経由でPythonを呼び出すサンプル',
      url: "https://github.com/cress-cc/react-socketio-celery-example",
      text: '画像生成AI用に作成したもの。ソースコードのみ。'
    },
    {
      title: 'Redmine Progress View',
      url: "https://github.com/cress-cc/redmine-progress-view",
      text: 'Redmineの進捗率を見やすくするブックマークレット。'
    }
  ];

  return (
    <header>
      <h1>Product</h1>
      <Stack gap={3}>
        {links.map(link =>
          <Card>
            <Card.Body>
              <Card.Title>{link.title}</Card.Title>
              <Card.Text>{link.text}</Card.Text>
              <Button variant="link" href={link.url} target="_blank">{link.url}</Button>
            </Card.Body>
          </Card>
        )}
      </Stack>
    </header>
  );
}

export default Product;
