function Index() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Dog Lovers</h1>
        <p className="text-lg mb-6">Your ultimate destination for all things dogs. Learn, share, and connect with fellow dog enthusiasts.</p>
        <Button variant="primary" size="lg">Get Started</Button>
      </div>
      <div className="mt-10">
        <h2 className="text-3xl font-semibold mb-4">Why Dogs?</h2>
        <p className="text-lg mb-6">Dogs are known for their loyalty, companionship, and unconditional love. They bring joy and happiness to our lives in countless ways.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Companionship</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Dogs provide constant companionship and can help reduce feelings of loneliness.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Health Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Having a dog can encourage a more active lifestyle and reduce stress levels.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Dogs can provide a sense of security and protection for their owners.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}

export default Index;