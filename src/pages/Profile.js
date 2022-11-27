import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';

function Profile() {
  return (
    <header>
      <h1>Profile</h1>
      <Stack gap={3}>
        <Card>
          <Card.Body>
            <Card.Title>名前</Card.Title>
            <Card.Text>くれす</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>概要</Card.Title>
            <Card.Text>
              <Image src="https://www.gravatar.com/avatar/a030b7071b0e4189538826595b980a9e" alt="gravatar" roundedCircle="true"/>
              <p>霊長類です。</p>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>保有資格</Card.Title>
            <Card.Text>
              <ul>
                <li>ネットワークスペシャリスト</li>
                <li>CFP&reg;（日本FP協会認定）</li>
                <li>１級ファイナンシャル・プランニング技能士</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>開発歴</Card.Title>
            <Card.Text>
              <ul>
                <li>Java歴15年くらい</li>
                <li>Node.js、Pythonはたまに書く程度</li>
                <li>Webの開発はIE6全盛期の頃から</li>
                <li>基幹システムよりもエンドユーザー向けの公開Webの方が好き</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>FP歴</Card.Title>
            <Card.Text>
              <ul>
                <li>2022年10月からCFP&reg;</li>
                <li>得意科目はリスク管理とタックスプランニング</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </Stack>
    </header>
  );
}

export default Profile;
