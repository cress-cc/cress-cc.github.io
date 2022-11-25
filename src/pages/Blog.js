import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

function Blog() {

  const links = [
    {
      title: 'Twitter',
      url: "https://twitter.com/cress_cc",
      text: '見てのとおり、なんでもありのごった煮。'
    },
    {
      title: 'Qiita',
      url: "https://qiita.com/cress_cc",
      text: '技術情報。PythonとNode.jsが多め。まれにJava、Perl、Oracleなど。'
    },
    {
      title: 'Note',
      url: "https://note.com/cress_cc" ,
      text: '保険と税金を中心に、ファイナンシャル・プランニングの６分野（金融・不動産・ライフ・リスク・タックス・相続）について雑に書いています。'
    },
    {
      title: 'Studyplus',
      url: "https://www.studyplus.jp/" ,
      text: 'FP2級から開始した学習記録。その後、CFP～FP1級を経て、現在はアクチュアリー研究会員に挑戦中。'
    },
  ];

  return (
    <header>
      <h1>Blog</h1>
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

export default Blog;
