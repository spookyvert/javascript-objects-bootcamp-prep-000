var playlist = {
  name : 'song title',
  
}
console.log(playlist.name)

function updatePlaylist(playlist,name,title){
  return Object.assign({}, playlist, {[name]:value})
}

function removeFromPlaylist(playlist,name){
  delete playlist.name
 
  return playlist
  
}