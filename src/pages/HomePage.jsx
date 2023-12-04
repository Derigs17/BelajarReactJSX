import { Container, Row, Col, Button,Image } from 'react-bootstrap';

import beranda1 from '../images/beranda1.png';
import rencana1 from '../images/rencana1.png'
import rencana2 from '../images/rencana2.png'
import rencana3 from '../images/rencana3.png'

const HomePage = () => {
  return (
    <>

      <Container fluid className='mt-4'>
        <Row className="justify-content-center align-items-center">

          <Col md lg={{ span: 6, offset: 1 }} className='d-flex align-items-center'>
            <Container className="mt-5">
              <h1>Mulailah untuk Merawat Tanaman Hiasmu</h1><br />
              <p style={{ textAlign: 'justify' }}>
                Selamat datang di Tanaman Hias, di mana setiap detik adalah perjalanan
                baru dalam merawat kehidupan hijau. Mari jelajahi, belajar, dan berbagi
                cinta terhadap tanaman hias. Inilah tempatnya, di mana setiap kuncup
                adalah awal dari petualangan yang tak terlupakan.
              </p><br />
              <Button type="button" className="btn btn-secondary btn-custom" >Selengkapnya</Button>
            </Container>
          </Col>
          <Col md lg={{span:4, offset: 1 }} className='ml-md-5 mt-3 text-center' >
            <Image style={{ width: "90%", height: "90%" }}
              src={beranda1}
              alt="Login Image"
              className="img-fluid mt-3"
            />
          </Col>
        </Row>
      </Container>
      {/* bagian 2 */}
      <Container>
        <Row className="justify-content-center pt-5">
          <Col className='mt-4 pt-4 text-center'>
            <h2>Memulai Rencana Anda dengan benar</h2>
            <h4>Ikuti Instruksi untuk lebih lanjut</h4>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col sm={4} className='isi1 mt-4 pt-4 d-flex flex-column align-items-center'>
            <img src={rencana1} alt="rencana1" className="mb-4" />
            <h5 className="text-center">Penyiraman yang Tepat</h5>
            <p style={{ textAlign: 'justify' }}>
              Tentukan jadwal penyiraman berdasarkan jenis tanaman, kondisi iklim,
              dan musim. Pastikan tanah tidak terlalu kering atau terlalu basah.
            </p>
          </Col>

          <Col sm={4} className='isi2 mt-4 pt-4 d-flex flex-column align-items-center'>
            <img src={rencana2} alt="rencana2" className="mb-4" />
            <h5 className="text-center">Pemupukan Rutin</h5>
            <p style={{ textAlign: 'justify' }}>
              Berikan tanaman nutrisi yang diperlukan dengan memilih pupuk
              yang sesuai dengan jenis tanaman dan fase pertumbuhannya.
            </p>
          </Col>

          <Col sm={4} className='isi3 mt-4 pt-4 d-flex flex-column align-items-center'>
            <img src={rencana3} alt="rencana3" className="mb-4" />
            <h5 className="text-center">Perhatikan Pencahayaan</h5>
            <p style={{ textAlign: 'justify' }}>
              Beberapa tanaman membutuhkan sinar matahari langsung, dan ada yang
              di tempat teduh. Pahami preferensi pencahayaan tanaman Anda.
            </p>
          </Col>
        </Row>

      </Container >

    </>
  )
}

export default HomePage