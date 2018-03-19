/* eslint-disable */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import nodeFetch from 'node-fetch';

configure({ adapter: new Adapter() });
