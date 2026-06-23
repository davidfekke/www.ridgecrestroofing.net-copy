import { useQuery, useAuth } from "@animaapp/playground-react-sdk";

export const AdminPage = () => {
  const { user, isPending: authPending, isAnonymous, login } = useAuth();

  const {
    data: requests,
    isPending: dataLoading,
    error,
  } = useQuery("InspectionRequest", {
    orderBy: { createdAt: "desc" },
  });

  if (authPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    );
  }

  if (isAnonymous) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center gap-5 max-w-sm w-full mx-4">
          <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center">
            <svg
              className="w-7 h-7 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11c0-1.105.895-2 2-2s2 .895 2 2v1H10v-1c0-1.105.895-2 2-2zm-4 4h8v5H8v-5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 11V7a7 7 0 0114 0v4"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold font-bebas_neue tracking-wide text-gray-800">
            Admin Access
          </h1>
          <p className="text-gray-500 text-sm text-center">
            Sign in to view inspection request submissions.
          </p>
          <button
            onClick={login}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white font-bold py-3 px-6 rounded-full hover:opacity-90 transition"
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold font-bebas_neue tracking-widest text-[#1a3c5e]">
            RidgeCrest
          </span>
          <span className="text-gray-400">|</span>
          <span className="text-sm font-medium text-gray-600">
            Inspection Requests
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">{user?.email}</span>
          <a
            href="/"
            className="text-sm text-orange-500 hover:text-orange-600 font-medium transition"
          >
            ← Back to site
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-bebas_neue tracking-wide text-gray-800 mb-1">
            Inspection Requests
          </h1>
          <p className="text-gray-500 text-sm">
            {dataLoading
              ? "Loading..."
              : `${requests?.length ?? 0} total submission${(requests?.length ?? 0) !== 1 ? "s" : ""}`}
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl px-5 py-4 mb-6 text-sm">
            Failed to load submissions: {error.message}
          </div>
        )}

        {/* Loading */}
        {dataLoading && (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-4 border-orange-400 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Empty */}
        {!dataLoading && !error && requests?.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <svg
              className="w-12 h-12 mx-auto mb-4 opacity-40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <p className="font-medium">No submissions yet</p>
            <p className="text-sm mt-1">
              Inspection requests will appear here once submitted.
            </p>
          </div>
        )}

        {/* Table — desktop */}
        {!dataLoading && requests && requests.length > 0 && (
          <>
            <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100 text-left text-gray-500 uppercase text-xs tracking-wider">
                    <th className="px-6 py-4 font-semibold">Name</th>
                    <th className="px-6 py-4 font-semibold">Address</th>
                    <th className="px-6 py-4 font-semibold">Email</th>
                    <th className="px-6 py-4 font-semibold">Phone</th>
                    <th className="px-6 py-4 font-semibold">Submitted</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {requests.map((r) => (
                    <tr
                      key={r.id}
                      className="hover:bg-orange-50/40 transition-colors"
                    >
                      <td className="px-6 py-4 font-medium text-gray-800">
                        {r.name}
                      </td>
                      <td className="px-6 py-4 text-gray-600">{r.address}</td>
                      <td className="px-6 py-4">
                        <a
                          href={`mailto:${r.email}`}
                          className="text-orange-500 hover:text-orange-600 transition"
                        >
                          {r.email}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {r.phone ? (
                          <a
                            href={`tel:${r.phone}`}
                            className="hover:text-orange-500 transition"
                          >
                            {r.phone}
                          </a>
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-gray-400">
                        {new Date(r.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                        <span className="block text-xs text-gray-300">
                          {new Date(r.createdAt).toLocaleTimeString("en-US", {
                            hour: "numeric",
                            minute: "2-digit",
                          })}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Cards — mobile */}
            <div className="md:hidden flex flex-col gap-4">
              {requests.map((r) => (
                <div
                  key={r.id}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-5"
                >
                  <div className="flex justify-between items-start mb-3">
                    <p className="font-bold text-gray-800">{r.name}</p>
                    <p className="text-xs text-gray-400">
                      {new Date(r.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 mb-1">{r.address}</p>
                  <a
                    href={`mailto:${r.email}`}
                    className="text-sm text-orange-500 block mb-1"
                  >
                    {r.email}
                  </a>
                  {r.phone && (
                    <a
                      href={`tel:${r.phone}`}
                      className="text-sm text-gray-500"
                    >
                      {r.phone}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};
