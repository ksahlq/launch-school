let tweet = 'Starting to get the hang of it... #javascript #launchschool';

console.log(tweet.split(' ')); // => ['Starting', 'to',...,'#launchschool']
console.log(tweet.split(' ').reverse()); // => ['#launchschool',...,'to', 'Starting']
console.log(tweet.split(' ').reverse().join(' ')); // => #launchschool #javascript ... it  