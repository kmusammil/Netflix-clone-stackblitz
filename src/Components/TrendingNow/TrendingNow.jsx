function TrendingNow() {
    return (
        <>
            <div className="bg-black text-white h-auto">
                <div class="relative inline-block text-left">
                    <button type="button" class=" text-white px-4 py-2  border-2">
                        India
                    </button>
                    <div class="dropdown-menu hidden absolute  bg-white shadow-lg mt-2 w-48 right-0">
                        <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
                        <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
                        <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default TrendingNow;