package com.ufcqx.vale.valemobilidade.fragment;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.ufcqx.vale.valemobilidade.R;

public class ItineraryFragment extends Fragment {

    public ItineraryFragment() {
        // Required empty public constructor
    }

    // TODO: Rename and change types and number of parameters
    public static ItineraryFragment newInstance() {
        ItineraryFragment fragment = new ItineraryFragment();
        return fragment;
    }


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_itinerary, container, false);
    }
}
