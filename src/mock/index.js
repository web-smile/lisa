import Mock from 'mockjs';
import treeAPI from './tree';


Mock.mock(/\/assign-select\/department/, 'get', treeAPI.getDepartmentList);
Mock.mock(/\/assign-select\/label/, 'get', treeAPI.getLabelList);
// Mock.mock('/assign-select/label/', 'get', treeAPI.getLabelList);
export default Mock;
