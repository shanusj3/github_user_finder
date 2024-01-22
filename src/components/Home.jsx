export default function ({ user }) {
    return (
        <div className="container mx-auto p-6">

            <div className="w-full flex flex-col md:flex-row items-center justify-between shadow-md p-6 bg-slate-50">
                <div className="flex flex-col md:flex-row gap-2 md:gap-3 items-center">
                    <img src={user.avatar_url} alt="logo" className="w-20 h-20 md:w-32 md:h-32 rounded-full" />
                    <div>
                        <h1 className="mt-3  text-xl font-medium text-gray-700 hover:text-[#49c353] md:text-4xl"><a href={`https://github.com/${user.login}`}>{user.name}</a></h1>
                        <span className="flex gap-3 text-sm  text-gray-600">
                            <p><span className="font-bold">{user.followers}</span> Followers</p>
                            <p><span className="font-bold">{user.following}</span> Following</p>
                        </span>
                    </div>

                </div>


                <a href={`https://github.com/${user.login}`} target="_blank" className=" mt-2 md:mt-0 p-2 md:p-4 bg-yellow-300 rounded-lg text-gray-600 shadow-md">Visit Profile</a>

            </div>

        </div>
    )
}