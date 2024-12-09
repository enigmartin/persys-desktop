const env={clientVersion:'1.0.0'};
var apiRoot;
var publicToken;
//
var apiUrl='http://'+apiRoot+':3000';
var chatStreamConfig={host:apiRoot, port: 9000, path: "/chat"};
var statStreamConfig={host:apiRoot, port: 4000, path: "/stats"};
var ragStreamConfig={host:apiRoot, port: 7000, path: "/rag"};
//
const optIcon='<i class="fa-solid fa-ellipsis"></i>';
const ragIcon='<i class="fa-solid fa-comment"></i>';
const activeColor='#86B5B5';
