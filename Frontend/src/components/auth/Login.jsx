import React, { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { RadioGroup } from '../ui/radio-group';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { Loader2 } from 'lucide-react';

const LoginPage = () => {
    const [input, setInput] = useState({
        email: '',
        password: '',
        role: 'student', // default role is student
    });
    const [loading, setLoading] = useState(false); // State to manage loading indicator

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        // Handle form submission logic here
        setLoading(false);
    };

    return (
        <div className="container mx-auto py-8 px-6">
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center mb-6">Log In</h2>
                <form onSubmit={submitHandler} className="space-y-6">
                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            value={input.email}
                            onChange={(e) => setInput({ ...input, email: e.target.value })}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div>
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            value={input.password}
                            onChange={(e) => setInput({ ...input, password: e.target.value })}
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <RadioGroup className="flex items-center gap-4 my-5">
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    checked={input.role === 'student'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r1">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="teacher"
                                    checked={input.role === 'teacher'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="r2">Teacher</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    {
                        loading
                            ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait </Button>
                            : <Button type="submit" className="w-full my-4">Log In</Button>
                    }

                    <span className='text-sm'>Don't have an account? <Link to="/signup" className='text-blue-600'>Sign Up</Link></span>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
