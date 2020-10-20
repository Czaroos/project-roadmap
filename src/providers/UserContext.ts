import React from 'react';

import { User } from '../firebase';

const UserContext = React.createContext<User | null>(null);
export default UserContext;
