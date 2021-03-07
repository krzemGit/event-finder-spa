import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  DoubleRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  HomeOutlined,
  FormOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthProvider';

const { Sider } = Layout;

const Sidebar = () => {

  const { theme } = useTheme();
  const { user, handleLogin } = useAuth();
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(prevCollapsed => !prevCollapsed)
  }

  return (
    < Sider trigger={null} collapsible collapsed={collapsed} theme={theme} className="nav" style={{ height: '100%' }}>

      <div className="logo" />

      <Menu theme={theme} mode="inline" defaultSelectedKeys={['1']}>

        <div className="nav__icon-wrapper">
          <DoubleRightOutlined className={`nav__icon ${!collapsed && 'reverse'}`} onClick={toggleCollapsed} />
        </div>

        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">
            Home
            </Link>
        </Menu.Item>

        <Menu.Item key="2" icon={<CommentOutlined />}>
          <Link to="/about">
            About
            </Link>
        </Menu.Item>

        <Menu.Item key="3" icon={<CalendarOutlined />}>
          <Link to="/events">
            Events
          </Link>
        </Menu.Item>

        <Menu.Item key="4" icon={<FormOutlined />}>
          <Link to="/form">
            EventForm
            </Link>
        </Menu.Item>

        <Menu.Item
          key="5"
          onClick={handleLogin}
          icon={<UserOutlined />}
        >
          {user ? 'Logout' : 'Login'}
        </Menu.Item>

      </Menu>

    </ Sider>
  );
}

export default Sidebar;