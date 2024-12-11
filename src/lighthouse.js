import lighthouse from 'lighthouse';
import { launch } from 'chrome-launcher';

async function runLighthouse(url) {
  const chrome = await launch({chromeFlags: ['--headless']});
  const options = {
    logLevel: 'info',
    output: 'html',
    onlyCategories: ['performance'],
    port: chrome.port
  };
  const runnerResult = await lighthouse(url, options);

  console.log(`Performance score was: ${runnerResult.lhr.categories.performance.score * 100}`);
  await chrome.kill();
}

runLighthouse('https://example.com');
