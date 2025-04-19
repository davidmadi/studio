"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";

const DashboardPage: React.FC = () => {
    const [currentTime, setCurrentTime] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
            setCurrentTime(formattedTime);
        };

        updateTime();
        const intervalId = setInterval(updateTime, 60000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="container p-6">
            <div className="flex items-center justify-between mb-4">
                <Avatar className="w-10 h-10">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex gap-4">
                    <Link href="/">Home</Link>
                    <Link href="/login">Login</Link>
                </div>
            </div>
            <div className="mb-6">
                <Input type="text" placeholder="Search..." className="max-w-md" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Good {currentTime}!</h1>
            <Separator className="mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-primary-foreground">
                    <CardHeader>
                        <CardTitle className="text-foreground">Card 1 Title</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-foreground">Some placeholder text for the first card.</p>
                    </CardContent>
                </Card>
                <Card className="bg-secondary-foreground">
                    <CardHeader>
                        <CardTitle className="text-foreground">Card 2 Title</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-foreground">Some placeholder text for the second card.</p>
                    </CardContent>
                </Card>
                <Card className="bg-accent-foreground">
                    <CardHeader>
                        <CardTitle className="text-foreground">Card 3 Title</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-foreground">Some placeholder text for the third card.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Card 4 Title</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Some placeholder text for the fourth card.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default DashboardPage;