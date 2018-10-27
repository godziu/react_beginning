var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'film o czarodzieju',
		image: './images/potter.jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		image: './images/lew.jpg'
	},
	{
		id: 3,
		title: 'Wilk z Wallstreet',
		desc: 'Film o wspomnieniach Jordana Belforta',
		image: './images/wilk.jpg'
	},
	{
		id: 4,
		title: 'Skazani na Shawshank',
		desc: 'Film o niesłusznie skazanym bankierze',
		image: './images/skazani.jpg'
	}
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', { key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.image})
    );
});

var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista Filmów'),
		React.createElement('ul', {}, moviesElements)
		);


ReactDOM.render(element, document.getElementById('app'));