import React, { useEffect, useState } from 'react';
import * as LoginStyle from '../../Pages/LoginPage_Style';
import qrcode from '../../../Resources/Images/qrcode.png';
import { useNavigate } from 'react-router-dom';
import { socket } from '../../../socket';
import { AddLoginQr } from '../../../store/api';
import { LoginError } from './LoginError';

function QrLogin() {
  const navigate = useNavigate();
  const [qrNumber, setQrNumber] = useState<string>('');

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log('현재 qr핀번호는', data.barcode);
    if (data.barcode !== qrNumber) {
      setQrNumber(data.barcode);
    }
  };

  useEffect(() => {
    if (qrNumber != '') {
      handleLogin();
    }
  }, [qrNumber]);

  const handleLogin = async () => {
    console.log(qrNumber);
    try {
      const result = await AddLoginQr(qrNumber);
      if (result) {
        navigate('/cleanup');
      } else {
        LoginError();
        setQrNumber('');
      }
    } catch (error) {
      LoginError();
      setQrNumber('');
    }
  };

  return (
    <>
      <LoginStyle.PinTitle>사원증의 QR을 찍어주세요</LoginStyle.PinTitle>
      <LoginStyle.Img src={qrcode} />
    </>
  );
}

export default QrLogin;
