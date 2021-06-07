import React, { useState, useEffect } from 'react';
import spinner from '../../assets/loading.gif';
import Header from '../Header/header';
import DataRow from '../DataRow/dataRow';
import ProgressBar from '../ProgressBar/progressBar';
import './homePage.css';
import moment from 'moment';

export default function HomePage({ albums }) {
  const [status, setStatus] = useState('none');
  const [processed, setProcessed] = useState(0);
  const [date, setDate] = useState();

  function backupAlbums(data) {
    return new Promise(() => {
      for (let i = 1; i <= 10; i++) {
        setTimeout(() => {
          setProcessed(Math.ceil(i * data/10));
        }, i * 1000);
      }
    });
  }

  async function getProcessedData(data) {
    try {
      await backupAlbums(data)
    } catch(e) {
      await setStatus('aborted');
    }
  }

  const toggleButton = () => {
    if (status === 'finished') {
      setStatus('paused');
    } else {
      setStatus('running');
      getProcessedData(albums);
    }
  }

  const capitalizeFirstLetter = (string) => string[0].toUpperCase() + string.substring(1);

  useEffect(() => {
    if (processed === albums) {
      setStatus('finished');
      setDate(moment().format('MM/DD/YYYY'));
    }
  }, [processed])

  return (
    <div className="wrapper">
      <Header
        title='Google Drive'
        status={status}
        toggleButton={status !== 'running' ? toggleButton : ()=>{}}
      />
      <div className="content">
        <DataRow
          title='Status'
          content={<div>{
            `${status === 'none' ? '-' : capitalizeFirstLetter(status)}`
          } {status === 'running' && <img src={spinner} className="spinner" alt="spinner" />}</div>}
          status={status}
        />
        <div className="separator" />
        <DataRow
          title='Next backup'
          content={date && status !== 'paused' ? moment().add(28, 'days').format('MM/DD/YYYY') : '-'}
          status={status}
        />
        <div className="separator" />
        <DataRow
          title='Last backup'
          content={date || '-'}
          status={status}
        />
      </div>
      <ProgressBar value={processed/albums*100} count={processed} total={albums} />
    </div>
  );
}
