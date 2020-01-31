<html>
<body>
  const options = {
  fontCssUrl: '//fonts.googleapis.com/css?family=Open+Sans',
  fontFileUrl: 'http://www.amazon.com/my-font.woff',
  fontName: 'Open Sans',
  fontSize: 18,
  backgroundColor: '#000000',
  textColor: '#fff',
  borderRadius: 3,
  width: 40,
  height: 130,
  text: 'Feedback',
  edge: 'left'
};
const button = new ButtonGenerator(options);
button
  .generate()
  .then(buffer => console.log(buffer))
  
<!-- Place this tag where you want the button to render. -->
<a class="github-button" href="https://23chromosomes.github.io/MyUserDB/" data-color-scheme="no-preference: dark; light: light; dark: dark;" data-size="large" aria-label="Bandaged Discord Theme">Go to BandagedDiscord Theme</a>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>
</body>
</html>
