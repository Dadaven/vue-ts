import axios from 'axios';

// base function
const httpGet = (url:string, params:any) => axios.get(url, {params: params})
const httpPost = (url:string, data:any) => axios.post(url, data)
const httpPut = (url:string, data:any) => axios.put(url, data)
const httpDelete = (url:string, data:any) => axios.delete(url, {data: data})
const httpGetList=(url:string)=>axios.get(url)

// RestFUL style
const get = (url:string, id:any) => httpGet(url + "/" + id, null)
const list = (url:string, params:any) => httpGet(url, params)
const add = (url:string, data:any) => httpPost(url, data)
const edit = (url:string, id:any, data:any)=> httpPut(url + "/" + id, data)
const remove = (url:string, id:any)=> httpDelete(url + "/" + id, null)
const getlist=(url:string)=>httpGetList(url)

const objects = ['basic', 'author', 'chinese', 'copybook', 'font', 'textbook','communication', 'chapter', 'section', 'sectioncontent', 'resource'];

let expFuncs = new Array();

// for (let i = 0; i < objects.length; i ++) {
//     let title:string = objects[i][0].toUpperCase() + objects[i].substring(1, objects[i].length);
//     expFuncs['get' + title]     = (id) => get('/api/' + objects[i], id)
//     expFuncs['list' + title]    = (params) => list('/api/' + objects[i], params)
//     expFuncs['add' + title]     = (data) => add('/api/' + objects[i], data)
//     expFuncs['edit' + title]    = (id, data) => edit('/api/' + objects[i], id, data)
//     expFuncs['remove' + title]  = (id) =>remove('/api/' + objects[i], id)
// }

// expFuncs.requestLogin = params => axios.post('/api/login', params);

// expFuncs.addPictureForCopybook = (copybook_id, resource_id) => add(`/api/copybook/${copybook_id}/resources`, {resource_id: resource_id});
// expFuncs.removePictureForCopybook = (copybook_id, resource_id) => remove(`/api/copybook/${copybook_id}/resources`, resource_id);

// expFuncs.addPictureForCommunication = (communication_id, resource_id) => add(`/api/communication/${communication_id}/resources`, {resource_id: resource_id});
// expFuncs.removePictureForCommunication = (communication_id, resource_id) => remove(`/api/communication/${communication_id}/resources`, resource_id);

// expFuncs.addCommentForCommunication = (communication_id, comment) => add(`/api/communication/${communication_id}/comment`, comment);
// expFuncs.listCommentForCommunication = (communication_id, params) => list(`/api/communication/${communication_id}/comment`, params);
// expFuncs.removeCommentForCommunication = (communication_id, comment_id) => remove(`/api/communication/${communication_id}/comment`, comment_id);

// expFuncs.addLikeForCommunication = (communication_id, user_id) => add(`/api/communication/${communication_id}/like`, {user_id: user_id});
// expFuncs.removeLikeForCommunication = (communication_id, user_id) => httpDelete(`/api/communication/${communication_id}/like`, {user_id: user_id});

// expFuncs.addFontForSection = (section_id, chinese_character_font_id) => add(`/api/section/${section_id}/font`, {chinese_character_font_id: chinese_character_font_id});
// expFuncs.removeFontForSection = (section_id, chinese_character_font_id) => remove(`/api/section/${section_id}/font`, chinese_character_font_id);

// expFuncs.countFont = (copybook_id) => httpGet(`/api/font/count`, {copybook_id: copybook_id});
// expFuncs.getTagList=(tag_name)=>getlist(`/api/tag/?tag_name=${tag_name}`);
// // console.log(expFuncs);

export default expFuncs;