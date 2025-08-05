import React, { useState } from 'react';
import ViewURL from './ViewURL';
const URLShortener = () => {
  const [urls, setUrls] = useState([]);
  const [shortUrl, setShortUrl] = useState('');
  const [urlInput, setUrlInput] = useState('');
  const [expiryInput, setExpiryInput] = useState('');
  const [showView, setShowView] = useState(false);

  const findUrl = shortCode => {
    const urlObj = urls.find(item => item.shortCode === shortCode);
    if (!urlObj) {
      alert('Short code not found.');
      return;
    }
    window.open(urlObj.url, '_blank');
  };
  const generateShortCode = () => {
    return Math.random().toString(36).substring(2, 8);
  };

  const shortenURL = () => {
    if (!urlInput) {
      alert('Please enter a URL to shorten.');
      return;
    }
    if (urls.some(item => item.url === urlInput)) {
      alert(
        `This URL has already been shortened. ${
          urls.find(item => item.url === urlInput).shortCode
        }`
      );
      return;
    }
    const shortCode = generateShortCode();
    setUrls([...urls, { url: urlInput, expiryTime: expiryInput, shortCode }]);
    setShortUrl(`https://frontEnd/${shortCode}`);
    setUrlInput('');
    setExpiryInput('');
    console.log(`Shortening URL: ${urlInput} with expiry time: ${expiryInput}`);
  };

  const view = () => {
    setShowView(true);
  };

  return (
    <div>
      <button className="btn viewUrl" onClick={view}>View URLs</button>
      <h1 className='heading'>URL Shortener</h1>
      <p>Enter your URL below to shorten it:</p>
      <table align="center">
        <tbody>
          <tr>
            <td>
              <label htmlFor="urlIp">URL:</label>
            </td>
            <td>
              <input
                type="text"
                id="urlIp"
                placeholder="Enter URL here"
                value={urlInput}
                onChange={e => setUrlInput(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="timeIp">Set Expiry Time:</label>
            </td>
            <td>
              <input
                type="time"
                id="timeIp"
                value={expiryInput}
                onChange={e => setExpiryInput(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button className="btn" onClick={shortenURL}>
        Generate Shorten URL
      </button>
      {shortUrl && (
        <div>
          <p>Shortened URL:</p>
          <div>
            <a
              onClick={() => findUrl(shortUrl.split('/').pop())}
              style={{ cursor: 'pointer' }}
            >
              {shortUrl}
            </a>
          </div>
        </div>
      )}
      {showView && <ViewURL urls={urls} />}
    </div>
  );
};

export default URLShortener;
