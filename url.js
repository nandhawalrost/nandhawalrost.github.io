function main_url(param)
{
  var url = ""

  if(param === "taskmanweb"){
    url = "http://localhost:8081/"
  }
  if(param === "CHttp"){
    url = "test.com"
  }

  return url
}