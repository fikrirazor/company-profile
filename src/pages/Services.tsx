function services(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="shadow-md">
                <CardHeader>
                    <CardTitle>Service 1</CardTitle>
                    <CardDescription>Description of service 1</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Content of service 1</p>
                </CardContent>
            </Card>
        </div>

    )
}

export default Services