/*jshint esversion: 6 */
{
  let cookie = {
    read(key){
        var result;
        return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? (result[1]) : null;
    },
    write(key, val){
      
    }
  };

  module.exports = cookie;
}
