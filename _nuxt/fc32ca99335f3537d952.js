(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{187:function(e,t,r){e.exports=function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}var t=function(e){if("string"!=typeof e)return{};var t,r={},o=(e=e.split("+").join(" ")).match(/(?:[?](?:[^=]+)=(?:[^&#]*)(?:[&](?:[^=]+)=(?:[^&#]*))*(?:[#].*)?)|(?:[#].*)/);if(null===o)return{};t=o[0].substr(1).split(/[&#=]/);for(var i=0;i<t.length;i+=2)r[decodeURIComponent(t[i])]=decodeURIComponent(t[i+1]||"");return r},r=function(t,r){if("object"!==e(t))return"";var o="",i=0,n=Object.keys(t);if(0===n.length)return"";for(n.sort(),r||(o+="?"+n[0]+"="+t[n[0]],i+=1);i<n.length;i+=1)o+="&"+n[i]+"="+t[n[i]];return o},o=function(e){return void 0===e?0:e.match(/^(\d+[smhdw]?)+$/)?function(e){var t,r=0,o={s:1,m:60,h:3600,d:86400,w:604800};t=(e=e.replace(/([smhdw])/g," $1 ").trim()).split(" ");for(var i=0;i<t.length;i+=2)r+=parseInt(t[i],10)*o[t[i+1]||"s"];return r}(e):e.match(/^(\d+:?)+$/)?function(e){for(var t=0,r=[1,60,3600,86400,604800],o=e.split(":"),i=0;i<o.length;i++)t+=parseInt(o[i],10)*r[o.length-i-1];return t}(e):0},n=t;function d(){for(var e=0,t=["parseProvider","parse","bind","create"];e<t.length;e++){var r=t[e];this[r]=this[r].bind(this)}this.plugins={}}var l=d;d.prototype.parseProvider=function(e){var t=e.match(/(?:(?:https?:)?\/\/)?(?:[^.]+\.)?(\w+)\./i);return t?t[1]:void 0},d.prototype.parse=function(e){if(void 0!==e){var t,r=this.parseProvider(e),o=this.plugins[r];if(r&&o&&o.parse)return(t=o.parse.call(o,e,n(e)))&&((t=function(e){return e.params&&0===Object.keys(e.params).length&&delete e.params,e}(t)).provider=o.provider),t}},d.prototype.bind=function(e){if(this.plugins[e.provider]=e,e.alternatives)for(var i=0;i<e.alternatives.length;i+=1)this.plugins[e.alternatives[i]]=e},d.prototype.create=function(t){if("object"===e(t)&&"object"===e(t.videoInfo)){var r=t.videoInfo,o=t.params,n=this.plugins[r.provider];return o="internal"===o?r.params:o||{},n&&(t.format=t.format||n.defaultFormat,n.formats.hasOwnProperty(t.format))?n.formats[t.format].apply(n,[r,Object.assign({},o)]):void 0}};var base=new l,m=r;function c(){this.provider="canalplus",this.defaultFormat="embed",this.formats={embed:this.createEmbedUrl},this.mediaTypes={VIDEO:"video"}}c.prototype.parseParameters=function(e){return delete e.vid,e},c.prototype.parse=function(e,t){var r={mediaType:this.mediaTypes.VIDEO,id:t.vid};if(r.params=this.parseParameters(t),r.id)return r},c.prototype.createEmbedUrl=function(e,t){if(e.id&&e.mediaType===this.mediaTypes.VIDEO){var r="http://player.canalplus.fr/embed/";return t.vid=e.id,r+=m(t)}},base.bind(new c);var h=r;function y(){this.provider="coub",this.defaultFormat="long",this.formats={long:this.createLongUrl,embed:this.createEmbedUrl},this.mediaTypes={VIDEO:"video"}}y.prototype.parseUrl=function(e){var t=e.match(/(?:embed|view)\/([a-zA-Z\d]+)/i);return t?t[1]:void 0},y.prototype.parse=function(e,t){var r={mediaType:this.mediaTypes.VIDEO,params:t,id:this.parseUrl(e)};if(r.id)return r},y.prototype.createUrl=function(e,t,r){if(t.id&&t.mediaType===this.mediaTypes.VIDEO){var o=e+t.id;return o+=h(r)}},y.prototype.createLongUrl=function(e,t){return this.createUrl("https://coub.com/view/",e,t)},y.prototype.createEmbedUrl=function(e,t){return this.createUrl("//coub.com/embed/",e,t)},base.bind(new y);var f=r,v=o;function T(){this.provider="dailymotion",this.alternatives=["dai"],this.defaultFormat="long",this.formats={short:this.createShortUrl,long:this.createLongUrl,embed:this.createEmbedUrl,image:this.createImageUrl},this.mediaTypes={VIDEO:"video"}}T.prototype.parseParameters=function(e){return this.parseTime(e)},T.prototype.parseTime=function(e){return e.start&&(e.start=v(e.start)),e},T.prototype.parseUrl=function(e){var t=e.match(/(?:\/video|ly)\/([A-Za-z0-9]+)/i);return t?t[1]:void 0},T.prototype.parse=function(e,t){var r={mediaType:this.mediaTypes.VIDEO,params:this.parseParameters(t),id:this.parseUrl(e)};return r.id?r:void 0},T.prototype.createUrl=function(base,e,t){if(e.id&&e.mediaType===this.mediaTypes.VIDEO)return base+e.id+f(t)},T.prototype.createShortUrl=function(e,t){return this.createUrl("https://dai.ly/",e,t)},T.prototype.createLongUrl=function(e,t){return this.createUrl("https://dailymotion.com/video/",e,t)},T.prototype.createEmbedUrl=function(e,t){return this.createUrl("https://www.dailymotion.com/embed/video/",e,t)},T.prototype.createImageUrl=function(e,t){return delete t.start,this.createUrl("https://www.dailymotion.com/thumbnail/video/",e,t)},base.bind(new T);var U=r,w=o;function E(){this.provider="twitch",this.defaultFormat="long",this.formats={long:this.createLongUrl,embed:this.createEmbedUrl},this.mediaTypes={VIDEO:"video",STREAM:"stream",CLIP:"clip"}}E.prototype.seperateId=function(e){return{pre:e[0],id:e.substr(1)}},E.prototype.parseChannel=function(e,t){var r=t.channel||t.utm_content||e.channel;return delete t.utm_content,delete t.channel,r},E.prototype.parseUrl=function(e,t,r){var o;return(o=e.match(/(clips\.)?twitch\.tv\/(?:(?:videos\/(\d+))|(\w+)(?:\/clip\/(\w+))?)/i))&&o[2]?t.id="v"+o[2]:r.video?(t.id=r.video,delete r.video):r.clip?(t.id=r.clip,t.isClip=!0,delete r.clip):o&&o[1]&&o[3]?(t.id=o[3],t.isClip=!0):o&&o[3]&&o[4]?(t.channel=o[3],t.id=o[4],t.isClip=!0):o&&o[3]&&(t.channel=o[3]),t},E.prototype.parseMediaType=function(e){var t;return e.id?e.isClip?(t=this.mediaTypes.CLIP,delete e.isClip):t=this.mediaTypes.VIDEO:e.channel&&(t=this.mediaTypes.STREAM),t},E.prototype.parseParameters=function(e){return e.t&&(e.start=w(e.t),delete e.t),e},E.prototype.parse=function(e,t){var r={};return(r=this.parseUrl(e,r,t)).channel=this.parseChannel(r,t),r.mediaType=this.parseMediaType(r),r.params=this.parseParameters(t),r.channel||r.id?r:void 0},E.prototype.createLongUrl=function(e,t){var r="";if(e.mediaType===this.mediaTypes.STREAM&&e.channel)r="https://twitch.tv/"+e.channel;else if(e.mediaType===this.mediaTypes.VIDEO&&e.id)r="https://twitch.tv/videos/"+this.seperateId(e.id).id,t.start&&(t.t=t.start+"s",delete t.start);else{if(e.mediaType!==this.mediaTypes.CLIP||!e.id)return;r=e.channel?"https://www.twitch.tv/"+e.channel+"/clip/"+e.id:"https://clips.twitch.tv/"+e.id}return r+=U(t)},E.prototype.createEmbedUrl=function(e,t){var r="https://player.twitch.tv/";if(e.mediaType===this.mediaTypes.STREAM&&e.channel)t.channel=e.channel;else if(e.mediaType===this.mediaTypes.VIDEO&&e.id)t.video=e.id,t.start&&(t.t=t.start+"s",delete t.start);else{if(e.mediaType!==this.mediaTypes.CLIP||!e.id)return;r="https://clips.twitch.tv/embed",t.clip=e.id}return r+=U(t)},base.bind(new E);var I=r,L=o;function D(){this.provider="vimeo",this.alternatives=["vimeopro","vimeocdn"],this.defaultFormat="long",this.formats={long:this.createLongUrl,embed:this.createEmbedUrl,image:this.createImageUrl},this.mediaTypes={VIDEO:"video"}}D.prototype.parseUrl=function(e,t){var r=e.match(/(vimeo(?:cdn|pro)?)\.com\/(?:(?:channels\/[\w]+|(?:(?:album\/\d+|groups\/[\w]+|staff\/frame)\/)?videos?)\/)?(\d+)(?:_(\d+)(?:x(\d+))?)?(\.\w+)?/i);return r?(t.id=r[2],"vimeocdn"===r[1]&&(r[3]&&(t.imageWidth=parseInt(r[3]),r[4]&&(t.imageHeight=parseInt(r[4]))),t.imageExtension=r[5]),t):t},D.prototype.parseParameters=function(e){return this.parseTime(e)},D.prototype.parseTime=function(e){return e.t&&(e.start=L(e.t),delete e.t),e},D.prototype.parse=function(e,t){var r={mediaType:this.mediaTypes.VIDEO,params:this.parseParameters(t)};return(r=this.parseUrl(e,r)).id?r:void 0},D.prototype.createUrl=function(e,t,r){if(t.id&&t.mediaType===this.mediaTypes.VIDEO){var o=e+t.id,n=r.start;return delete r.start,o+=I(r),n&&(o+="#t="+n),o}},D.prototype.createLongUrl=function(e,t){return this.createUrl("https://vimeo.com/",e,t)},D.prototype.createEmbedUrl=function(e,t){return this.createUrl("//player.vimeo.com/video/",e,t)},D.prototype.createImageUrl=function(e,t){if(e.id&&e.mediaType===this.mediaTypes.VIDEO){var r="https://i.vimeocdn.com/video/"+e.id;return e.imageWidth&&e.imageHeight?r+="_"+e.imageWidth+"x"+e.imageHeight:e.imageWidth&&(r+="_"+e.imageWidth),void 0===e.imageExtension&&(e.imageExtension=".webp"),r+=e.imageExtension,delete e.imageExtension,r+=I(t)}},base.bind(new D);var A=r,O=o;function P(){this.provider="wistia",this.alternatives=[],this.defaultFormat="long",this.formats={long:this.createLongUrl,embed:this.createEmbedUrl,embedjsonp:this.createEmbedJsonpUrl},this.mediaTypes={VIDEO:"video",EMBEDVIDEO:"embedvideo"}}P.prototype.parseUrl=function(e){var t=e.match(/(?:(?:medias|iframe)\/|wvideo=)([\w-]+)/);return t?t[1]:void 0},P.prototype.parseChannel=function(e){var t=e.match(/(?:(?:https?:)?\/\/)?([^.]*)\.wistia\./),r=t?t[1]:void 0;if("fast"!==r&&"content"!==r)return r},P.prototype.parseParameters=function(e,t){return e.wtime&&(e.start=O(e.wtime),delete e.wtime),e.wvideo===t.id&&delete e.wvideo,e},P.prototype.parseMediaType=function(e){return e.id&&e.channel?this.mediaTypes.VIDEO:e.id?(delete e.channel,this.mediaTypes.EMBEDVIDEO):void 0},P.prototype.parse=function(e,t){var r={id:this.parseUrl(e),channel:this.parseChannel(e)};if(r.params=this.parseParameters(t,r),r.mediaType=this.parseMediaType(r),r.id)return r},P.prototype.createUrl=function(e,t,r){return t.start&&(t.wtime=t.start,delete t.start),r+=A(t)},P.prototype.createLongUrl=function(e,t){if(e.id&&e.mediaType===this.mediaTypes.VIDEO){var r="https://"+e.channel+".wistia.com/medias/"+e.id;return this.createUrl(e,t,r)}},P.prototype.createEmbedUrl=function(e,t){if(e.id&&(e.mediaType===this.mediaTypes.VIDEO||e.mediaType===this.mediaTypes.EMBEDVIDEO)){var r="https://fast.wistia.com/embed/iframe/"+e.id;return this.createUrl(e,t,r)}},P.prototype.createEmbedJsonpUrl=function(e){if(e.id&&(e.mediaType===this.mediaTypes.VIDEO||e.mediaType===this.mediaTypes.EMBEDVIDEO))return"https://fast.wistia.com/embed/medias/"+e.id+".jsonp"},base.bind(new P);var V=r;function S(){this.provider="youku",this.defaultFormat="long",this.formats={embed:this.createEmbedUrl,long:this.createLongUrl,flash:this.createFlashUrl,static:this.createStaticUrl},this.mediaTypes={VIDEO:"video"}}S.prototype.parseUrl=function(e){var t=e.match(/(?:(?:embed|sid)\/|v_show\/id_|VideoIDS=)([a-zA-Z0-9]+)/);return t?t[1]:void 0},S.prototype.parseParameters=function(e){return e.VideoIDS&&delete e.VideoIDS,e},S.prototype.parse=function(e,t){var r={mediaType:this.mediaTypes.VIDEO,id:this.parseUrl(e),params:this.parseParameters(t)};if(r.id)return r},S.prototype.createUrl=function(e,t,r){if(t.id&&t.mediaType===this.mediaTypes.VIDEO){var o=e+t.id;return o+=V(r)}},S.prototype.createEmbedUrl=function(e,t){return this.createUrl("http://player.youku.com/embed/",e,t)},S.prototype.createLongUrl=function(e,t){return this.createUrl("http://v.youku.com/v_show/id_",e,t)},S.prototype.createStaticUrl=function(e,t){return this.createUrl("http://static.youku.com/v1.0.0638/v/swf/loader.swf?VideoIDS=",e,t)},S.prototype.createFlashUrl=function(e,t){if(e.id&&e.mediaType===this.mediaTypes.VIDEO){var r="http://player.youku.com/player.php/sid/"+e.id+"/v.swf";return r+=V(t)}},base.bind(new S);var C=r,M=o;function F(){this.provider="youtube",this.alternatives=["youtu","ytimg"],this.defaultFormat="long",this.formats={short:this.createShortUrl,long:this.createLongUrl,embed:this.createEmbedUrl,shortImage:this.createShortImageUrl,longImage:this.createLongImageUrl},this.imageQualities={0:"0",1:"1",2:"2",3:"3",DEFAULT:"default",HQDEFAULT:"hqdefault",SDDEFAULT:"sddefault",MQDEFAULT:"mqdefault",MAXRESDEFAULT:"maxresdefault"},this.defaultImageQuality=this.imageQualities.HQDEFAULT,this.mediaTypes={VIDEO:"video",PLAYLIST:"playlist",SHARE:"share",CHANNEL:"channel"}}F.prototype.parseVideoUrl=function(e){var t=e.match(/(?:(?:v|vi|be|videos|embed)\/(?!videoseries)|(?:v|ci)=)([\w-]{11})/i);return t?t[1]:void 0},F.prototype.parseChannelUrl=function(e){var t=e.match(/\/channel\/([\w-]+)/);return t?{id:t[1],mediaType:this.mediaTypes.CHANNEL}:(t=e.match(/\/(?:c|user)\/([\w-]+)/))?{name:t[1],mediaType:this.mediaTypes.CHANNEL}:void 0},F.prototype.parseParameters=function(e,t){return(e.start||e.t)&&(e.start=M(e.start||e.t),delete e.t),e.v===t.id&&delete e.v,e.list===t.id&&delete e.list,e},F.prototype.parseMediaType=function(e){if(e.params.list&&(e.list=e.params.list,delete e.params.list),e.id&&!e.params.ci)e.mediaType=this.mediaTypes.VIDEO;else if(e.list)delete e.id,e.mediaType=this.mediaTypes.PLAYLIST;else{if(!e.params.ci)return;delete e.params.ci,e.mediaType=this.mediaTypes.SHARE}return e},F.prototype.parse=function(e,t){var r=this.parseChannelUrl(e);if(r)return r;var o={params:t,id:this.parseVideoUrl(e)};return o.params=this.parseParameters(t,o),o=this.parseMediaType(o)},F.prototype.createShortUrl=function(e,t){if(e.id&&e.mediaType===this.mediaTypes.VIDEO){var r="https://youtu.be/"+e.id;return t.start&&(r+="#t="+t.start),r}},F.prototype.createLongUrl=function(e,t){var r="",o=t.start;if(delete t.start,e.mediaType===this.mediaTypes.CHANNEL)if(e.id)r+="https://www.youtube.com/channel/"+e.id;else{if(!e.name)return;r+="https://www.youtube.com/c/"+e.name}else if(e.mediaType===this.mediaTypes.PLAYLIST&&e.list)t.feature="share",r+="https://www.youtube.com/playlist";else if(e.mediaType===this.mediaTypes.VIDEO&&e.id)t.v=e.id,r+="https://www.youtube.com/watch";else{if(e.mediaType!==this.mediaTypes.SHARE||!e.id)return;t.ci=e.id,r+="https://www.youtube.com/shared"}return e.list&&(t.list=e.list),r+=C(t),e.mediaType!==this.mediaTypes.PLAYLIST&&o&&(r+="#t="+o),r},F.prototype.createEmbedUrl=function(e,t){var r="https://www.youtube.com/embed";if(e.mediaType===this.mediaTypes.PLAYLIST&&e.list)t.listType="playlist";else{if(e.mediaType!==this.mediaTypes.VIDEO||!e.id)return;r+="/"+e.id,"1"===t.loop&&(t.playlist=e.id)}return e.list&&(t.list=e.list),r+=C(t)},F.prototype.createImageUrl=function(e,t,r){if(t.id&&t.mediaType===this.mediaTypes.VIDEO)return e+t.id+"/"+(r.imageQuality||this.defaultImageQuality)+".jpg"},F.prototype.createShortImageUrl=function(e,t){return this.createImageUrl("https://i.ytimg.com/vi/",e,t)},F.prototype.createLongImageUrl=function(e,t){return this.createImageUrl("https://img.youtube.com/vi/",e,t)},base.bind(new F);var R=r,N=o;function H(){this.provider="soundcloud",this.defaultFormat="long",this.formats={long:this.createLongUrl,embed:this.createEmbedUrl},this.mediaTypes={TRACK:"track",PLAYLIST:"playlist",APITRACK:"apitrack",APIPLAYLIST:"apiplaylist"}}H.prototype.parseUrl=function(e,t){var r=e.match(/(?:m\.)?soundcloud\.com\/(?:([\w-]+)\/(sets\/)?)([\w-]+)/i);return r?(t.channel=r[1],"playlists"===r[1]||r[2]?t.list=r[3]:t.id=r[3],t):t},H.prototype.parseParameters=function(e){return e.t&&(e.start=N(e.t),delete e.t),e},H.prototype.parseMediaType=function(e){return e.id&&("tracks"===e.channel?(delete e.channel,delete e.params.url,e.mediaType=this.mediaTypes.APITRACK):e.mediaType=this.mediaTypes.TRACK),e.list&&("playlists"===e.channel?(delete e.channel,delete e.params.url,e.mediaType=this.mediaTypes.APIPLAYLIST):e.mediaType=this.mediaTypes.PLAYLIST),e},H.prototype.parse=function(e,t){var r={};if((r=this.parseUrl(e,r)).params=this.parseParameters(t),(r=this.parseMediaType(r)).id||r.list)return r},H.prototype.createLongUrl=function(e,t){var r="",o=t.start;if(delete t.start,e.mediaType===this.mediaTypes.TRACK&&e.id&&e.channel)r="https://soundcloud.com/"+e.channel+"/"+e.id;else if(e.mediaType===this.mediaTypes.PLAYLIST&&e.list&&e.channel)r="https://soundcloud.com/"+e.channel+"/sets/"+e.list;else if(e.mediaType===this.mediaTypes.APITRACK&&e.id)r="https://api.soundcloud.com/tracks/"+e.id;else{if(e.mediaType!==this.mediaTypes.APIPLAYLIST||!e.list)return;r="https://api.soundcloud.com/playlists/"+e.list}return r+=R(t),o&&(r+="#t="+o),r},H.prototype.createEmbedUrl=function(e,t){var r="https://w.soundcloud.com/player/";if(delete t.start,e.mediaType===this.mediaTypes.APITRACK&&e.id)t.url="https%3A//api.soundcloud.com/tracks/"+e.id;else{if(e.mediaType!==this.mediaTypes.APIPLAYLIST||!e.list)return;t.url="https%3A//api.soundcloud.com/playlists/"+e.list}return r+=R(t)},base.bind(new H);var k=r;function Y(){this.provider="teachertube",this.alternatives=[],this.defaultFormat="long",this.formats={long:this.createLongUrl,embed:this.createEmbedUrl},this.mediaTypes={VIDEO:"video",AUDIO:"audio",DOCUMENT:"document",CHANNEL:"channel",COLLECTION:"collection",GROUP:"group"}}return Y.prototype.parse=function(e,t){var r={};r.list=this.parsePlaylist(t),r.params=t;var o=e.match(/\/(audio|video|document|user\/channel|collection|group)\/(?:[\w-]+-)?(\w+)/);if(o)return r.mediaType=this.parseMediaType(o[1]),r.id=o[2],r},Y.prototype.parsePlaylist=function(e){if(e["playlist-id"]){var t=e["playlist-id"];return delete e["playlist-id"],t}},Y.prototype.parseMediaType=function(e){switch(e){case"audio":return this.mediaTypes.AUDIO;case"video":return this.mediaTypes.VIDEO;case"document":return this.mediaTypes.DOCUMENT;case"user/channel":return this.mediaTypes.CHANNEL;case"collection":return this.mediaTypes.COLLECTION;case"group":return this.mediaTypes.GROUP}},Y.prototype.createLongUrl=function(e,t){if(e.id){var r="https://www.teachertube.com/";return e.list&&(t["playlist-id"]=e.list),e.mediaType===this.mediaTypes.CHANNEL?r+="user/channel/":r+=e.mediaType+"/",r+=e.id,r+=k(t)}},Y.prototype.createEmbedUrl=function(e,t){if(e.id){var r="https://www.teachertube.com/embed/";if(e.mediaType===this.mediaTypes.VIDEO||e.mediaType===this.mediaTypes.AUDIO)return r+=e.mediaType+"/"+e.id,r+=k(t)}},base.bind(new Y),base}()}}]);