
fetch('https://www.reddit.com/search.json?q=citadelscandal&sort=hot')
  .then(response => response.json())
  .then(data => {
  	let output = ''
  	
  	data.data.children.forEach(function(post){
  		let hasimg = '';
  		let timest = '';

  		if ((/\.(gif|jpg|jpeg|tiff|png)$/i).test(post.data.url)){
  			hasimg += `<img src="${post.data.url}" alt="Post image" >`;
  		}
  		
			let d = new Date(post.data.created*1000);
			
	    timest = d.toLocaleDateString("en-US");
		    
  		output += `
	  		<a href="https://www.reddit.com/${post.data.permalink}" class="r_post_cont">
	  			<div class="r_post_wr">
					<div class="r_post_header">
						<div class="r_avatar">
						</div>
						<div class="r_h">
							<div class="r_sub">
								r/${post.data.subreddit} - <span>${timest}</span>
							</div>
							<div class="r_author">
								Posted by u/${post.data.author}
							</div>
						</div>
					</div>
					<div class="r_post_data">
						<div class="r_title">
							${post.data.title}
						</div>
						<div class="r_img">
							${ hasimg }
						</div>
					</div>
					<div class="r_post_ft">
						<div class="r_score">
							<i class="fas fa-arrow-circle-up"></i>
							<span>${post.data.score}</span>
						</div>
						<div class="r_comment">
							<i class="far fa-comment-alt"></i>
							<span>${post.data.num_comments}</span>
						</div>
					</div>
	  			</div>
  			</a>
  		`
  	})
  	
  	document.getElementById('reddit-results').innerHTML = output;
  })
  .catch(error => console.log('ERROR'));
